import styled from 'styled-components/native'

export const Container = styled.View`
    width: 400;
    height: 200;
    margin: 10px;
    background-color: #ffffff;
    border-radius: 10;

    justify-content: space-between;
    align-items: center;
`
export const TitleContainer = styled.View`
    width: 100%;
    height: 50;
    border-bottom-width: 2;
    border-bottom-color: #52ff74;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
export const TitleTask = styled.Text`
    margin: 10px;
    font-family: 'Ubuntu';
    font-size: 20;
`
export const ButtonTrash = styled.TouchableOpacity`
    width: 35;
    margin-left: 10px;
    justify-content: center;
    align-items: center;
`
export const ButtonCheck = styled(ButtonTrash)`
    margin-left: -20;
`
export const DescriptionContainer = styled.ScrollView`
    width: 100%;
    height: 100%;
    padding: 5px;

`
export const Description = styled.Text`
    font-family: 'Ubuntu';
    font-size: 15;
    text-align: justify;
`