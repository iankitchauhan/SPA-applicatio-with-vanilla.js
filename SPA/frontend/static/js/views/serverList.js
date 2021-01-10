
export default class{
   
    constructor(data){
        this.data  = data;
    }

   
    async getHtml(){
        var str = '<ul style="list-style: none;padding-left: 0px;">';

for(var i in this.data){
   str += `<li style="padding: 10px;background-color: lightgrey;text-align: center;border: solid 2px darkgrey;margin: 5px;max-width: 30%;"><a>${this.data[i]}</a></li>`;
}

str += '</ul>';
        return `${str}`;
    }
}