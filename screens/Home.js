import React from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    SafeAreaView,
    TextInput,
    FlatList
} from 'react-native';

import {FONTS, COLORS, SIZES, Icons, images, dummyData} from '../constants'
import {CategoryCard} from '../components'
const Home = ({ navigation }) => {
    const renderHeader = () => {
        return (
            <View style={{
                flexDirection: 'row',
                marginHorizontal: SIZES.padding,
                alignItems: 'center',
                height: 80,

            }}> 
                <View
                    style={{
                        flex: 1
                    }}
                >
                    <Text 
                        style={{
                            color: COLORS.darkGreen,
                            ...FONTS.h2
                        }}
                    > 
                        Hello ByProgrammers
                    </Text>
                    <Text 
                        style={{
                            marginTop: 3,
                            color: COLORS.gray,
                            ...FONTS.body3
                        }}
                    >
                        What you want to cook Today?
                    </Text>
                    <TouchableOpacity
                        onPress={() => console.log("profile")}
                    >
                        <Image
                            source={images.profile}
                            style={{
                                width: 40,
                                width: 40,
                                borderRadius:20
                            }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    const renderSearchBar = () => {
        return (
            <View
                style={{
                    flexDirection: 'row',
                    height: 50,
                    alignItems: 'center',
                    marginHorizontal: SIZES.padding,
                    paddingHorizontal: SIZES.radius,
                    boarderRadius: 10,
                    backgroundColor: COLORS.lightGray
                }}
            > 
                <Image
                    source={images.search}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.gray
                    }}
                > 

                </Image>

                <TextInput
                    style={{
                        marginLeft: SIZES.radius,
                        ...FONTS.body3
                    }}
                >


                </TextInput>

            </View>
        )
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: COLORS.white,
            }}
        >
            <FlatList
                data = {dummyData.categories}
                keyExtractor={item => `${item.id}`}
                keyboardDismissMode='on-drag'
                showsVerticalScrollIndicator={false}
                ListHeaderComponent={
                    <View> 
                        {/* header */}
                        {renderHeader()}
                        {/* search */}
                        {renderSearchBar()}
                        {/* see recipe card */}
                        {/* trending section */}
                        {/* category header */}

                    </View>
                }
                renderItem={({item}) => {
                    return (
                        <CategoryCard 
                          containerStyle={{
                              marginHorizontal: SIZES.padding
                          }}
                          categoryItem={item}
                          
                          onPress={() => navigation.navigate("Recipe", {recipe: item})}
                        />
                    )
                }}
                ListFooterComponent={
                    <View 
                        style={{
                            marginBottom: 100
                        }}
                     />
                }
             />

         

        </SafeAreaView>
    )
}

export default Home;