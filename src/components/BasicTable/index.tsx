import { useReactTable, flexRender, getCoreRowModel, getPaginationRowModel, getFilteredRowModel } from "@tanstack/react-table"
import { TableUI, ActionButtons, Pagination, Container, PaginationButton } from "./styles"
import trash from '../../assets/Icons/trash.svg'
import edit from '../../assets/Icons/edit.svg'
import axios from "axios"
import { usePosts } from "../../Contexts/PostContext"
import { useState } from "react"
import Modal from "../Modal"
import { toast } from "react-toastify"

function BasicTable({ data, columns, filtering, setFiltering }: { data: any, columns: any, filtering: string, setFiltering: React.Dispatch<React.SetStateAction<string>> }) {
  const { posts, setPosts } = usePosts()
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [dataEdit, setDataEdit] = useState<any>({});

  const openModal = () => {
    setIsOpen(true)
    document.body.classList.add('modal-open');
  };
  const closeModal = () => {
    setIsOpen(false)
    document.body.classList.remove('modal-open');
  };

  const deletePost = async (row: any) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/posts/${row.original.id}`)
      const updatePost = posts.filter(objeto => objeto.id !== row.original.id)
      setPosts(updatePost)
      toast.success("Post deletado com sucesso!")

    } catch (err) {
      toast.error("Algo errado aconteceu !")
    }
  }
  const editPost = async (row: any) => {
    setDataEdit(row.original)
    openModal()
  }

  const extendedColumns = [
    ...columns,
    {
      id: 'action',
      header: 'AÇÃO',
      cell: ({ row }: { row: any }) => (
        <ActionButtons>
          <button onClick={() => editPost(row)}>
            <img src={edit} alt="Ícone de editar" />
          </button>
          <button onClick={() => deletePost(row)}>
            <img src={trash} alt="Ícone de lixeira" />
          </button>
        </ActionButtons>
      )
    }
  ];

  const table = useReactTable({
    data,
    columns: extendedColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering
    },
    onGlobalFilterChange: setFiltering
  })

  return (
    <Container>
      <TableUI>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell: any) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </TableUI>
      <Pagination>
        <PaginationButton
          disabled={!table.getCanPreviousPage()}
          className="previous" onClick={() => table.previousPage()}>
          {'<'}
        </PaginationButton>

        <PaginationButton
          active={(table.getState().pagination.pageIndex <= 2 ? 1 : table.getState().pagination.pageIndex) == table.getState().pagination.pageIndex + 1 ? true : false}
          onClick={() => table.setPageIndex(table.getState().pagination.pageIndex <= 2 ? 0 : table.getState().pagination.pageIndex - 2)}>
          {table.getState().pagination.pageIndex <= 2 ? 1 : table.getState().pagination.pageIndex - 1}
        </PaginationButton>

        <PaginationButton
          active={(table.getState().pagination.pageIndex <= 2 ? 2 : table.getState().pagination.pageIndex) == table.getState().pagination.pageIndex + 1 ? true : false}
          onClick={() => table.setPageIndex(table.getState().pagination.pageIndex <= 2 ? 1 : table.getState().pagination.pageIndex - 1)}>
          {table.getState().pagination.pageIndex <= 2 ? 2 : table.getState().pagination.pageIndex}
        </PaginationButton>

        <PaginationButton
          active={(table.getState().pagination.pageIndex <= 2 ? 3 : table.getState().pagination.pageIndex + 1) == table.getState().pagination.pageIndex + 1 ? true : false}
          onClick={() => table.setPageIndex(table.getState().pagination.pageIndex <= 2 ? 2 : table.getState().pagination.pageIndex)}>
          {table.getState().pagination.pageIndex <= 2 ? 3 : table.getState().pagination.pageIndex + 1}
        </PaginationButton>
        {
          table.getCanNextPage() && <p>...</p>
        }
        <PaginationButton
          disabled={!table.getCanNextPage()}
          className="next"
          onClick={() => table.nextPage()}>
          {'>'
          }</PaginationButton>
      </Pagination>
      <Modal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        title={"EDITAR POST"}
        data={dataEdit}
      />
    </Container>
  )
}

export default BasicTable