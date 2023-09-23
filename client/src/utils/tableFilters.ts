import { JobType } from "../types/job.type";

function orderRows(
    rows: JobType[],
    direction: "ASC" | "DESC",
    property: keyof JobType
): JobType[] {
   
    return rows.sort((a, b) => {
        if (typeof a[property] === "string" && typeof b[property] === "string") {
            
            if (property === "date_applied" || property === "date_saved") {
                const propName = property as keyof JobType;
                if(direction === "ASC") return new Date(a[propName]).getTime() - new Date(b[propName]).getTime();
                return new Date(b[propName]).getTime() - new Date(a[propName]).getTime();
                
            }

            const nameA = (a[property] as string).toUpperCase();
            const nameB = (b[property] as string).toUpperCase();

            if ((nameA < nameB) && direction === "ASC") {
                return -1;
            } 
            if ((nameA > nameB) && direction === "ASC") {
                return 1;
            } 

            if ((nameA < nameB) && direction === "DESC") {
                return 1;
            } 

            if ((nameA > nameB) && direction === "DESC") {
                return -1;
            } 

            // names must be equal
            return 0;
        } else if (typeof a[property] === "number" && typeof b[property] === "number") {
            const nameA = a[property] as number;
            const nameB = b[property] as number;

            if ((nameA < nameB) && direction === "ASC") {
                return -1;
            }
            if ((nameA > nameB) && direction === "ASC") {
                return 1;
            }

            if ((nameA < nameB) && direction === "DESC") {
                return 1;
            }

            if ((nameA > nameB) && direction === "DESC") {
                return -1;
            }

            // names must be equal
            return 0;
        } else {
            return 0
        }
        
    })
}
 
export {
    orderRows
}