const DUMMY_EVENTS = [
  {
    id: 'e1',
    title: '为每个人编程',
    description:
      '每个人都可以学习编码！是的，各位！在这次现场活动中，我们将学习所有关键的基础知识，并让您开始编程。',
    location: '圣萨默韦罗12345号, 25号大街',
    date: '2021-05-12',
    image: 'images/coding-event.jpg',
    isFeatured: false,
  },
  {
    id: 'e2',
    title: '内向者的人际网络',
    description:
      "我们知道：如果你是一个内向的人，建立人际关系就没有乐趣。这就是我们举办这个活动的原因——它会容易得多。承诺！",
    location: '新华尔街5号, 98765大街',
    date: '2021-05-30',
    image: 'images/introvert-event.jpg',
    isFeatured: true,
  },
  {
    id: 'e3',
    title: '为外向的人建立人际网络',
    description:
      '一般来说，你可能不需要网络帮助。但是，正确地集中精力——这是大多数人可以改进的地方。',
    location: '我的街道12号, 10115布罗克城',
    date: '2022-04-10',
    image: 'images/extrovert-event.jpg',
    isFeatured: true,
  },
]

export function getFeaturedEvents () {
  return DUMMY_EVENTS.filter((event) => event.isFeatured)
}

export function getAllEvents () {
  return DUMMY_EVENTS
}

export function getFilteredEvents (dateFilter) {
  const { year, month } = dateFilter

  let filteredEvents = DUMMY_EVENTS.filter((event) => {
    const eventDate = new Date(event.date)
    return eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
  })

  return filteredEvents
}

export function getEventById (id) {
  return DUMMY_EVENTS.find((event) => event.id === id)
}
