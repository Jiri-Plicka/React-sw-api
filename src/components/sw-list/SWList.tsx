import _ from 'lodash';
import { useGetSWListMutation } from '../../api/mutations/useGetSWList';
import { BaseSWPeople } from '../../api/responses/sw';
import * as Styled from './SWList.Styles';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const SWList = () => {
    const { mutateAsync } = useGetSWListMutation();
    const [data, setData] = useState<BaseSWPeople[]>([]);

    useEffect(() => {
        const getSWList = async () => {
            const data = await mutateAsync();
            return data;
        };
        const details = getSWList().then((response) => {
            if (_.size(response) > 0) {
                setData(response.results);
                // console.log(response);                
            }
        });
    }, [mutateAsync]);

    return (
        <Styled.SWListWrapper>
            <h1>Postavy</h1>
            <ul>
                {_.map(data, (people: BaseSWPeople) => {
                    return <li className='name' key={people.name} >
                                <h4>{people.name}</h4>
                                <p>{`Gender: ${people.gender}`}</p>
                                <p>{`Height: ${people.height}`}</p>
                            </li>
                })}
            </ul>
        </Styled.SWListWrapper>
    )
}