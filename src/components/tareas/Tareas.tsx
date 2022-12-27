import axios from 'axios'
import { useState, useEffect } from 'react'

interface Tarea {
	description: string
	priority: number
	status: string
	title: string
	_id: string
}

export const Tareas = () => {
	//Comunicacion con api necesitamos un State y un Effect
	const [tareas, setTareas] = useState<Tarea[]>([])

	useEffect(() => {
		obtenerTareas()
	}, [])

	const obtenerTareas = async () => {
		const resultado = await axios.get('https://tasksbk.up.railway.app/api/task')

		console.log(resultado.data)
		setTareas(resultado.data)
	}

	return (
		<div>
			<h1>Listado de Tareas</h1>
			{
				//Obtener tareas
				tareas?.map((tarea) => (
					<div
						style={{
							backgroundColor: `${
								tarea.status === 'To do'
									? 'grey'
									: tarea.status === 'Done'
									? 'tomato'
									: 'green'
							} `,
							margin: '5px',
							borderRadius: '20px',
							color: 'white',
							paddingLeft: '20px',
						}}
						key={tarea._id}
					>
						<p className="titulo-tarea">{tarea.title}</p>
						<p>{tarea.description}</p>
					</div>
				))
			}
		</div>
	)
}
