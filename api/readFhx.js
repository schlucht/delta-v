
export class ReadFhx {
    constructor(file){
        this.path = file[0]
        let reader = new FileReader()
        reader.readAsText(this.path)
        reader.onload = () => {
            console.log(reader.result)
        }
    }
}