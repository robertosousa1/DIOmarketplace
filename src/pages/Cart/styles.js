import styled from 'styled-components/native';
import { FlatList } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  align-items: center;
`;

export const ProductContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin-top: 60px;
  border-radius: 20px;
  background-color: #e83f5b;
`;

export const ProductList = styled(FlatList)`
  padding: 30px 10px;
`;

export const Product = styled.View`
  flex-direction: row;
  margin: 5px;
  background: #fff;
  min-width: 350px;
  min-height: 130px;
  padding: 15px 10px;
  border-radius: 20px;
`;

export const ProductImage = styled.Image`
  height: 92px;
  width: 140px;
`;

export const ProductTitleContainer = styled.View`
  font-size: 16px;
  margin-left: 5px;
  margin-top: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: column;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const ProductSinglePrice = styled.Text`
  font-size: 12px;
  color: #414756;
  margin-top: 8px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  margin-top: 5px;
  font-size: 16px;
  color: #e83f5b;
`;

export const ProductQuantity = styled.Text`
  font-weight: bold;
  margin-top: 5px;
  margin-right: 10px;
  font-size: 16px;
  color: #e83f5b;
`;

export const ActionContainer = styled.View`
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;
  margin-left: auto;
`;

export const ActionButton = styled.TouchableOpacity`
  background: rgba(232, 63, 91, 0.1);
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
`;

export const TotalProductsContainer = styled.View`
  bottom: 0;
  position: absolute;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 36px 40px;
  border-radius: 10px;
  background: #e83f5b;
`;

export const TotalProductsText = styled.Text`
  flex: 1;
  font-size: 16px;
  color: #fff;
  margin-left: 15px;
  font-weight: bold;
`;

export const SubTotalValue = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
`;
