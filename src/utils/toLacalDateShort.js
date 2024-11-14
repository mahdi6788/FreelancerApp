export default function toLacalDateShort(date){
    return new Date(date).toLocaleDateString("fa-IR", {})
}