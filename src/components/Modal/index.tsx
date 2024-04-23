import { Container, Wrapper } from "./styles"
import close from "../../assets/Icons/close.svg"
import InputTextUI from "../Inputs/Input"
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import ButtonUI from "../Button"
import { useForm } from 'react-hook-form';
import TextAreaUI from "../Inputs/TextArea"
import axios from "axios"
import { usePosts } from "../../Contexts/PostContext"
import { useEffect } from "react"
import { toast } from "react-toastify"

interface IModal {
  isOpen: boolean,
  closeModal: () => void,
  title: string,
  data?: {
    title: string,
    body: string,
    id: number
  }
}

const createPostSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1)
})

function Modal({ isOpen, closeModal, title, data }: IModal) {
  const { posts, setPosts } = usePosts();

  const { register, reset, handleSubmit, formState: { errors }, getValues } = useForm({
    resolver: zodResolver(createPostSchema),
    values: { title: data?.title, content: data?.body },
    resetOptions: {
      keepDirtyValues: true,
    },
  })

  useEffect(() => {
    reset()
  }, [])

  /* A razão da função updatePost ser um pouco mais complexa é que quando faço uma
  requisição put com o id maior de que 100 acontece um erro. Por se tratar de uma fake api
  de 100 posts cadastrados, quando faço a requisição post para adicionar um novo dado,esses dados 
  não são persistido no servido, em outras palavras, o post com id igual ou superior a 101 não existe
  no servido, por isso a função é mais complexa que as demais.  */

  const updatePost = async (id = 0) => {
    if (id <= 100) {
      try {
        const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {
          title: getValues().title,
          body: getValues().content
        })

        const index = posts.findIndex(item => item.id === id);
        if (index !== -1) {
          let aux = [...posts]
          aux[index].title = response.data.title;
          aux[index].body = response.data.body;
          setPosts(aux)
          reset()
          closeModal()
          toast.success("Post atualizado com sucesso!")
        } else {
          toast.error("Algo errado aconteceu !")
        }


      } catch (err) {
        toast.error("Algo errado aconteceu !")
      }
    } else {
      const index = posts.findIndex(item => item.id === id);
      if (index !== -1) {
        let aux = [...posts]
        aux[index].title = getValues().title || '';
        aux[index].body = getValues().content || '';
        setPosts(aux)
      } else {
        toast.error("Algo errado aconteceu !")
      }

      reset()
      closeModal()
      toast.success("Post atualizado com sucesso!")

    }

  }

  const deletePost = async (id?: number) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      const updatePost = posts.filter(objeto => objeto.id !== id)
      setPosts(updatePost)
      closeModal()
      toast.success("Post deletado com sucesso!")

    } catch (err) {
      toast.error("Algo errado aconteceu !")
    }
  }

  const createPost = async (data: any) => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: data.title,
        body: data.content
      });
      setPosts([...posts,
      {
        id: posts.length == 0 ? 1 : posts[posts.length - 1]?.id + 1,
        title: response.data.title,
        body: response.data.body,
        userId: 1
      }
      ])
      reset()
      closeModal()
      toast.success("Post criado com sucesso!")

    } catch (err) {
      toast.error("Algo errado aconteceu!")
    }
  }

  if (isOpen) {
    return (
      <Wrapper>
        <Container>
          <div id="header">
            <p>{title}</p>
            <button>
              <img src={close} alt="fechar modal" onClick={closeModal} />
            </button>
          </div>
          <form onSubmit={title == "EDITAR POST" ? handleSubmit(() => updatePost(data?.id)) : handleSubmit(createPost)} id="form">
            <div id="body">
              <InputTextUI
                label="título *"
                placeholder="digite um título"
                register={{ ...register("title") }}
                errors={errors.title}
                defaultValue=""
              />
              <TextAreaUI
                label="conteúdo *"
                placeholder="digite um conteúdo"
                register={{ ...register("content") }}
                errors={errors.content}
                rows={6}
              />
            </div>
            <div id="footer">
              {
                title != "ADICIONAR POST"
                && <ButtonUI action={() => deletePost(data?.id)} model="outline" type="button" text="Excluir" />
              }
              <ButtonUI model="basic" type="submit" text="Salvar" />
            </div>
          </form>

        </Container>
      </Wrapper>
    )
  }
}

export default Modal