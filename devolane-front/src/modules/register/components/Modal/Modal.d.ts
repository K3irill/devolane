export type IRegisterFormModal = {
	isRegisterSuccess: boolean
	isRegisterError: boolean
	setRegisterError: React.Dispatch<React.SetStateAction<boolean>>
	setRegisterSuccess: React.Dispatch<React.SetStateAction<boolean>>

	countdown: number
	regError: string | null
}
