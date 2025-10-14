interface ButtonIconProps {
	icon: React.ReactNode
	children: React.ReactNode
}

const ButtonIcon = (props: ButtonIconProps) => {
	return (
		<>
			<button className="
			rounded-xl
			border-2
			flex
			gap-2
			items-center
			px-4 py-2
			hover:border-gray-400 hover:cursor-pointer
			">
				<span>{props.icon}</span>
				<span>{props.children}</span>
			</button>
		</>
	)
}

export default ButtonIcon;