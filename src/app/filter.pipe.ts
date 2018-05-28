import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform{

    transform(girls:any, term:any): any{
        // check if search term is undifined
        if(term === undefined)
            return girls;
        //return updated girls array
        return girls.filter(function(girl:any){
            return girl.Name.toLowerCase().includes(term.toLowerCase());
        })
    }
}