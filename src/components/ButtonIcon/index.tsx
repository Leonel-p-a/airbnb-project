interface ButtonIconProps {
	icon: React.ReactNode
	children?: React.ReactNode
}

const ButtonIcon = (props: ButtonIconProps) => {
	return (
		<>
			<button className="
			rounded-xl
			border-2 border-gray-200
			flex
			gap-2
			items-center
			px-4 py-2
			mb-5
			hover:border-gray-400 hover:cursor-pointer
			">
				<span>{props.icon}</span>
				<span className="hidden sm:inline">{props.children}</span>
			</button>
		</>
	)
}

export default ButtonIcon;