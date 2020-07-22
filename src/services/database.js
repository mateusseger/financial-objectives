import * as firebase from 'firebase/app'
import 'firebase/firestore'

const enrichObject = objective => {
  return {
    ...objective,
    percentage: (objective.currentValue * 100) / objective.necessaryValue
  }
}

const insertObjective = objective => {
  const db = firebase.firestore()
  return db.collection('objectives').add(enrichObject(objective))
} 

const updateObjective = (id, objective) => {
  const db = firebase.firestore()
  return db.collection(`objectives`).doc(id).set(enrichObject(objective))
}

const listObjectives = async () => {
  const db = firebase.firestore()
  const response = await db.collection('objectives').get()
  return response.docs.map((item) => {
    return {
      id: item.id,
      ...item.data()
    }
  })
}

const removeObjective = id => {
  const db = firebase.firestore()
  return db.collection('objectives').doc(id).delete()
}

export default {
  insertObjective,
  updateObjective,
  listObjectives,
  removeObjective
}