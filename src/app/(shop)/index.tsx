import { FlatList, FlatListComponent, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { PRODUCTS } from '../../../assets/products'
import ProductListItem from '../../components/product-list-item'
import ListHeader from '../../components/list-header'


const index = () => {
  return (
    // View is just like div and is used for grouping
    <View>
      {/* react native component for lists that we can get from API */}
      <FlatList data={PRODUCTS} renderItem={({item})=>
      <ProductListItem product={item}/>}
      keyExtractor={item => item.id.toString()}
      numColumns={2}
      ListHeaderComponent={ListHeader}
      contentContainerStyle={styles.flatListContent}
      columnWrapperStyle={styles.flatListColumn}
      style={{paddingHorizontal: 10, paddingVertical: 5}}
      />
    </View>
  )
}

export default index
const styles = StyleSheet.create({
flatListContent: {
  paddingBottom: 20,
},
flatListColumn: {
  justifyContent: "space-between"
}

})