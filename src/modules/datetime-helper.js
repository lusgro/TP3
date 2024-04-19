import moment from 'moment'

class DateTimeHelper {
    isDate(date) {
        date = new Date(date)
        return moment(date, 'YYYY-MM-DD', true).isValid()
    }

    getEdadActual(date) {
        let fechaCumpleaños = new Date(date)
        let fechaActual = new Date()
        let edad = fechaActual.getFullYear() - fechaCumpleaños.getFullYear()
        let mes = fechaActual.getMonth() - fechaCumpleaños.getMonth()
        if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaCumpleaños.getDate())) {
            edad--
        }
        return JSON.stringify({"edad": edad})
    }

    getDiasHastaMiCumple(date) {
        let fechaCumpleaños = new Date(date)
        let fechaActual = new Date()
        let proxCumpleaños = new Date(fechaActual.getFullYear(), fechaCumpleaños.getMonth(), fechaCumpleaños.getDate())
        if (proxCumpleaños < fechaActual) {
            proxCumpleaños.setFullYear(fechaActual.getFullYear() + 1)
        }
        let diasRestantes = Math.ceil((proxCumpleaños - fechaActual) / (1000 * 60 * 60 * 24))
        return JSON.stringify({"diasRestantes": diasRestantes})
    }

    getDiaTexto(date, abreviado) {
        const dias = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado']
        date = new Date(date)
        let diaPalabras = dias[date.getDay()]
        diaPalabras = abreviado ? diaPalabras.substring(0, 2) : diaPalabras
        return JSON.stringify({"dia": diaPalabras})
    }

    getMesTexto(date, abreviado) {
        const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        date = new Date(date)
        let mesPalabras = dias[date.getMonth()]
        mesPalabras = abreviado ? mesPalabras.substring(0, 2) : mesPalabras
        return JSON.stringify({"mes": mesPalabras})
    }
}

export default new DateTimeHelper()