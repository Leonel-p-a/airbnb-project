// import { IconUserCircle } from "@/assets/icons";
import { IconUserCircle } from "@/assets/icons";
import ButtonIcon from "@/components/ButtonIcon";
import Logo from "@/components/Logo"
import Link from "next/link"

const TopBar = () => {
	return (
		<div className="container py-6 mx-auto flex justify-around items-center">
			<Logo />

			<div className="flex gap-6">
				<Link className="font-semibold" href="/">Acomodações</Link>
				<Link className="opacity-60" href="/">Experiências</Link>
			</div>

			<ButtonIcon
				icon={(
					<IconUserCircle
						aria-label="Ícone de usuário"
						size={20}
					/>
				)} >
				Entrar
			</ButtonIcon>


		</div>
	)
}

export default TopBar;