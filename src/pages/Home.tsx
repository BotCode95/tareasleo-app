import { Formulario } from '../components/formulario/Formulario'
import { Tareas } from '../components/tareas/Tareas'

export const Home = () => {
	return (
		<div className="row">
			<div className="col-4"></div>
			<div className="col-4">
				<h1 className="titulo">Crear Tarea</h1>
				<Formulario />
				<Tareas />
			</div>
			<div className="col-4"></div>
		</div>
	)
}
