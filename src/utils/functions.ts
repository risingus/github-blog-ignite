import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const formatString = (value: any) => {
	if (typeof value !== 'string') return ''
	if (value.trim().length === 0) return ''
	return value
}

const formatNumber = (value: any) => {
	if (typeof value !== 'number') return 0
	return value
}

const formatDateToNow = (value: any) => {
	try {
		const formatedDate = formatDistanceToNow(new Date(value), {
			locale: ptBR,
			addSuffix: true,
		})

		return formatedDate
	} catch (error) {
		return ''
	}
}

export { formatString, formatNumber, formatDateToNow }
