import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard';

const Categories = () => {
    return (
        <ScrollView horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 15,
                paddingTop: 10,
            }}
        >
            {/* Categories card */}
            <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_hO6l7DbFS55CpUxFaMW1TTi7C69183W_JPKp7rlvA&s" title="testing1" />
            <CategoryCard imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_hO6l7DbFS55CpUxFaMW1TTi7C69183W_JPKp7rlvA&s'
                title="testing2" />
            <CategoryCard imgUrl='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc_hO6l7DbFS55CpUxFaMW1TTi7C69183W_JPKp7rlvA&s'
                title="testing3" />
        </ScrollView>
    );
};

export default Categories;