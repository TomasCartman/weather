import wCond from './weather_conditions.json'

export default function weatherConditions() {
    function getIcon(code) {
        const res = wCond.find(curr => curr.code === code)
        return res
    }

    return {
        getIcon
    }
}