import { useEffect, useState } from 'react';
import * as Styled from './SWPlanets.Styles';
import {  BaseSWPlanets } from '../../api/responses/sw';
import { useGetSWPlanetsMutation } from '../../api/mutations/useGetSWPlanets';
import _ from 'lodash';

export const SWPlanets = () => {
    const { mutateAsync } = useGetSWPlanetsMutation();
    const [data, setData] = useState<BaseSWPlanets[]>([]);

    useEffect(() => {
        const getSWPlanets = async () => {
            const data = await mutateAsync();
            return data;
        };
        const details = getSWPlanets().then((response) => {
            if (_.size(response) > 0) {
                setData(response.results);
                // console.log(response);                
            }
        });
    }, [mutateAsync]);

    return (
        <Styled.SWPlanetsWrapper>
            <h1>Planety</h1>
            <ul>
                {_?.map(data, (planets: BaseSWPlanets) => {
                    return <li className='planet' key={planets?.name}>
                        <div>
                            <h4>{planets?.name}</h4>
                            <p>{`Climate: ${planets?.climate}`}</p>
                            <p>{`Gravity: ${planets?.gravity}`}</p>
                            <p>{`terrain: ${planets?.terrain}`}</p>
                            <p>{`Population: ${planets?.population}`}</p>
                        </div>
                    </li>
                })}
            </ul>
        </Styled.SWPlanetsWrapper>
    );
};