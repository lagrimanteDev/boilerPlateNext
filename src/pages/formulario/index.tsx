import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"


const DEFAULT_MESSAGE = "Campo obrigatório"

const regrasFormulario = z.object({
    nomeCompleto: z.string().min(3, DEFAULT_MESSAGE).trim(),
    telefone: z.string().length(9, DEFAULT_MESSAGE),
    endereco: z.string().min(3, DEFAULT_MESSAGE).max(200)
})

type TipoFormulario = z.infer<typeof regrasFormulario>

export default function Formulario() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<TipoFormulario>({
        resolver: zodResolver(regrasFormulario)
    })

    function onSubmit(data: TipoFormulario) {
        console.log(data)
        reset()
    }

    return (
        <>
            <div className="flex w-full min-h-screen justify-center items-center font-serif font-bold italic text-2xl bg-emerald-400/50">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div >
                        <label htmlFor="nomeCompleto">Nome completo:</label>
                        <input id="nomeCompleto" type="text" className="border rounded-md"{...register("nomeCompleto")} />
                        {errors.nomeCompleto && <p>{errors.nomeCompleto.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="telefone">Telefone:</label>
                        <input id="telefone" type="text" className="border rounded-md"{...register("telefone")} />
                        {errors.telefone && <p>{errors.telefone.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="endereco">Endereço:</label>
                        <input id="endereco" type="text" className="border rounded-md"{...register("endereco")} />
                        {errors.endereco && <p>{errors.endereco.message}</p>}
                    </div>

                    <button type="submit" className="border rounded-md">Enviar</button>
                </form>
            </div>
        </>
    )
}