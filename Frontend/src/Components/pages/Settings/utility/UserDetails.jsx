import { Box, Grid, Typography, styled } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from '../../../../hooks/useTranslation'

const Header = styled(Box)`
 border-bottom: 2px solid lightgray;
 padding-bottom: 25px;
`
const Container = styled(Box)`
    margin-top: 5%;
    row-gap: 29%;
    display: grid;
`
const InfoBox = styled(Box)`
    border: 2px solid lightgray;
    border-radius: 6px;
    padding: 3px 10px;
`
function UserDetails() {
    const User = useSelector(state => state.auth.userData)
    const { t } = useTranslation()

    return (
        <>
            <Header>
                <Typography sx={{ fontSize: 24, fontWeight: 600 }}>{t('userDetails.title')}</Typography>
                <Typography>{t('userDetails.subtitle')}</Typography>
            </Header>
            <Container>
                <Grid container columnSpacing={6}>
                    <Grid item lg={3}>
                        <Typography sx={{ fontWeight: 700, fontSize: 15 }}>{t('userDetails.username')}</Typography>
                        <InfoBox><Typography>{User.username}</Typography></InfoBox>
                    </Grid>
                    <Grid item lg={3}>
                        <Typography sx={{ fontWeight: 700, fontSize: 15 }}>{t('userDetails.email')}</Typography>
                        <InfoBox><Typography>{User.email}</Typography></InfoBox>
                    </Grid>
                </Grid>
                <Grid container columnSpacing={6}>
                    <Grid item lg={3}>
                        <Typography sx={{ fontWeight: 700, fontSize: 15 }}>{t('userDetails.role')}</Typography>
                        <InfoBox><Typography>{User.role}</Typography></InfoBox>
                    </Grid>
                    <Grid item lg={3}>
                        <Typography sx={{ fontWeight: 700, fontSize: 15 }}>{t('userDetails.companyName')}</Typography>
                        <InfoBox><Typography>{User.companyName}</Typography></InfoBox>
                    </Grid>
                </Grid>

            </Container>
        </>
    )
}

export default UserDetails
