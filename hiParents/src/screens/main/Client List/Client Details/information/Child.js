import * as React from 'react';
import { List } from 'react-native-paper';
import { View, Text, StyleSheet, Image, Pressable,TextInput } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';

const Child = (props) => {

  const [expanded, setExpanded] = React.useState(true);
  // console.log('CHILD: ',props.detail);
  const handlePress = () => setExpanded(!expanded);
    const Accordion= () => {
        return (
        <View style={{width: '85%'}}>
            
            <List.Section /* title="Accordions" */>
            <View style={{backgroundColor: 'white', height: 120, width: '100%',elevation: 10, justifyContent: "center", alignItems: 'center', borderTopLeftRadius: 12, borderTopRightRadius: 12}}>
                        <Image style={{height: 120,width: 120}} source={{uri:props.detail.child.photo}}/>
                </View>
              <List.Accordion
                title="Child Information"
                style={{backgroundColor: 'white', elevation: 2}} //for styling the wrapping and touchable ripple element
                // titleStyle={{}} //to style accordion's title elements
                //descriptionStyle={{}} // to style the item desc
                /* left={props => <List.Icon {...props} icon="folder" />} */>
              
                <List.Item title={`Child Name : ${props.detail.child.name}  `} style={{justifyContent:"center",backgroundColor: 'white', borderBottomWidth: 0.55, borderBottomColor: 'grey'}}/>
                <List.Item title={`Place Of Birth : ${props.detail.child.place_birth}  `} style={{backgroundColor: 'white', borderBottomWidth: 0.55, borderBottomColor: 'grey'}}/>
                <List.Item title={`Date Of Birth : ${props.detail.child.date_birth}  `} style={{backgroundColor: 'white', borderBottomWidth: 0.55, borderBottomColor: 'grey'}}/>
                <List.Item title={`Gender : ${props.detail.child.gender}  `} style={{backgroundColor: 'white', borderBottomLeftRadius: 12, borderBottomRightRadius: 12, elevation: 5}}/>
              </List.Accordion>
        
              {/* <List.Accordion
                title="Controlled Accordion"
                left={props => <List.Icon {...props} icon="folder" />}
                expanded={expanded}
                onPress={handlePress}>
                <List.Item title="First item" />
                <List.Item title="Second item" />
              </List.Accordion> */}
            </List.Section>
            </View>
          );  
    }
    return (
        <ScrollView style={{marginBottom: '4%'}}>
            <View style={{marginTop: '5%',width: '100%',flex: 1, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center'}}>
                
                    <Accordion/>
                
            </View>
        </ScrollView>
    )
};
export default Child;