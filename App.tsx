import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import FlatCards from './android/components/FlatCards'
import ElevatedCards from './android/components/ElevatedCards'
import FancyCard from './android/components/FancyCard'
import ActionCard from './android/components/ActionCard'

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <FlatCards/>
      <ElevatedCards/>
      <FancyCard/>
      <ContactList/>
      <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
