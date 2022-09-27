import * as Dialog from "@radix-ui/react-dialog";
import { ArrowSquareDown, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { CloseButton, Content, Overlay, Title } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { KanbanContext } from "../../../contexts/KanbanContext";
import { useContext } from "react";

const newCardFormSchema = z.object({
  description: z.string(),
  status: z.string(),
});

type NewCardInputs = z.infer<typeof newCardFormSchema>;

export function NewCardModal() {
  const { createNewCard } = useContext(KanbanContext);
  const { register, handleSubmit, reset } = useForm<NewCardInputs>({
    resolver: zodResolver(newCardFormSchema),
    defaultValues: {
      description: "",
      status: "",
    },
  });

  function handleCreateNewCard(data: NewCardInputs) {
    createNewCard(data);
    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Title>New Card</Title>

        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewCard)}>
          <label>
            <span>Description</span>
            <input
              type="text"
              placeholder="Descrição"
              required
              {...register("description")}
            />
          </label>

          <label>
            <span>Status</span>
            <select {...register("status")}>
              <option value="Resolve">Resolve</option>
              <option value="Urgent">Urgent</option>
            </select>
            <ArrowSquareDown
              size={25}
              className="selectArrow"
              color="#9C9C9C"
            />
          </label>

          <button type="submit">Create</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
