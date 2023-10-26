import { useEffect, useState } from 'react';
import { useGetSWCardMutation } from '../../api/mutations/useGetSWCard';
import * as Styled from './SWCard.Styles';
import { BaseSWPeople } from '../../api/responses/sw';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

export const SWCard = ({name}: {name: string}) => {
    const { mutateAsync } = useGetSWCardMutation();
    const [details, setDetails] = useState<BaseSWPeople>();

    useEffect(() => {
        const getSWDetails = async () => {
            const data = await mutateAsync(name);
            return data;
        };
        const _details = getSWDetails().then((resp) => {
            setDetails(resp);
        });
    });
    
    return (
        <Styled.SWCardWrapper>
            <Card>
                <CardHeader
                    title={details?.name}
                />
                <CardContent>
                    <Typography>{`Height: ${details?.height}`}</Typography>
                </CardContent>
            </Card>
        </Styled.SWCardWrapper>
    )
}