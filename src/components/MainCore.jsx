import { ListClubs } from './ListClubs';
import { Divisions } from './Divisions';

export function MainCore (listClubs){
    return ( 
       <>
       { listClubs && listClubes.length > 0 && listClubs.map((item, index) => {
            <div className="club-card">
                <img src={ item.image } alt={ item.name } />
                <h2>{ item.name }</h2>
                


            </div>

        })
        }
       </>


    ); 
}
