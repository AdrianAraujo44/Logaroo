import EmptyBox from "../../components/EmptyBox"
import { Container, Title, Content, Header } from "./styles"
import ButtonUI from "../../components/Button"
import { useMemo, useState } from "react"
import Modal from "../../components/Modal"
import BasicTable from "../../components/BasicTable"
import { usePosts } from "../../Contexts/PostContext"
import { Input } from "../../components/Inputs/Input/styles"

function Home() {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const { posts } = usePosts();
  const [filtering, setFiltering] = useState<string>('');

  const openModal = () => {
    setIsOpen(true)
    document.body.classList.add('modal-open');
  };
  const closeModal = () => {
    setIsOpen(false)
    document.body.classList.remove('modal-open');
  };

  const addPost = () => {
    openModal()
  }

  const data = useMemo(() => posts, [posts])
  const columns = [
    {
      header: "ID",
      accessorKey: "id",
    },
    {
      header: "TÍTULO",
      accessorKey: "title",
    },
    {
      header: "CONTEÚDO",
      accessorKey: "body",
    },
  ]

  return (
    <Container>
      <Title>
        <h1>Logaroo</h1>
        <p>[TESTE] FRONTEND</p>
      </Title>
      <Header>
        <p>BLOG POST</p>
        <div className="box">
          <Input
            type="text"
            value={filtering}
            onChange={(e) => setFiltering(e.target.value)}
            placeholder={"Pesquisar"}
          />
          <ButtonUI model="basic" type="button" text="ADICIONAR" action={addPost} />
        </div>
      </Header>
      <Content $content={posts.length > 0 ? true : false}>
        {
          posts.length >= 1
            ? <BasicTable
                data={data}
                columns={columns}
                filtering={filtering}
                setFiltering={setFiltering}
              />
            : <EmptyBox />
        }
      </Content>

      <Modal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        title={"ADICIONAR POST"}
      />
    </Container>
  )
}

export default Home
