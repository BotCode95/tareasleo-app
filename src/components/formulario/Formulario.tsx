import React, { ChangeEvent, FormEvent, useState } from 'react'
import axios from 'axios'

export const Formulario = () => {
	const [datos, setDatos] = useState({
		titulo: '',
		descripcion: '',
		prioridad: 1,
	})

	const manejarDatos = (event: ChangeEvent<HTMLInputElement>) => {
		console.log('Valor', event.target.value)
		console.log('Nombre', event.target.name)
		setDatos({
			...datos,
			titulo: event.target.value,
		})
	}

	const manejarDatosTextArea = (event: ChangeEvent<HTMLTextAreaElement>) => {
		console.log('Valor', event.target.value)
		console.log('Nombre', event.target.name)
		setDatos({
			...datos,
			descripcion: event.target.value,
		})
	}

	const enviarDatosAPI = async (datos: any) => {
		const objAPI = {
			title: datos.titulo,
			description: datos.descripcion,
		}
		const resultado = await axios.post(
			'https://tasksbk.up.railway.app/api/task',
			objAPI
		)

		return resultado
	}
	const enviarDatos = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		console.log(datos)

		const api = await enviarDatosAPI(datos)

		if (api?.status === 200) {
			alert('se creo la tarea en la base de datos')
		} else {
			alert('hubo un error')
		}
	}

	return (
		<form onSubmit={enviarDatos} className="container-form">
			<div className="mb-3">
				<label className="form-label">Título</label>
				<input
					type="text"
					name="titulo"
					onChange={manejarDatos}
					className="form-control"
					id="exampleFormControlInput1"
					placeholder="titulo de tarea"
				/>
			</div>
			<div className="mb-3">
				<label className="form-label">Descripción</label>
				<textarea
					name="descripcion"
					className="form-control"
					id="exampleFormControlTextarea1"
					onChange={manejarDatosTextArea}
					rows={3}
				></textarea>
			</div>
			<select className="form-select" aria-label="Default select example">
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
			</select>
			<button className="btn btn-primary mt-3" type="submit">
				Enviar
			</button>
		</form>
	)
}
