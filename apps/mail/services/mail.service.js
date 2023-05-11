import { storageService } from '../../../services/async-storage.service.js'

const MAIL_KEY = 'mailDB'

const loggedinUser = {
  email: 'ofekr2261@appsus.com',
  fullname: 'Ofek Rashti',
}
_createMails()

export const mailService = {
  query,
  get,
  remove,
  save,
  getDefaultFilter,
  getEmptyMailtoSend,
  getEmptyMailtoDraft,
  getInboxNum,
  getReadPercentage,
}

function get(mailId) {
  return storageService.get(MAIL_KEY, mailId)
}

function remove(mailId) {
  return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
  if (mail.id) return storageService.put(MAIL_KEY, mail)
  else return storageService.post(MAIL_KEY, mail)
}

function query(filterBy) {
  return storageService.query(MAIL_KEY).then((mails) => {
    if (filterBy.txt) {
      const regex = new RegExp(filterBy.txt, 'i')
      mails = mails.filter(
        (mail) =>
          regex.test(mail.subject) ||
          regex.test(mail.body) ||
          regex.test(mail.from)
      )
    }
    if (filterBy.isRead !== null) {
      mails = mails.filter((mail) => {
        return mail.isRead === filterBy.isRead
      })
    }
    if (filterBy.isStared) {
      mails = mails.filter((mail) => {
        return mail.isStared
      })
    }
    if (filterBy.status) {
      if (filterBy.status === 'all') {
        mails = mails.filter((mail) => {
          return mail.status !== 'trash' && mail.status !== 'draft'
        })
      } else {
        mails = mails.filter((mail) => {
          return mail.status === filterBy.status
        })
      }
    }
    return mails
  })
}

function getReadPercentage() {
  return storageService.query(MAIL_KEY).then((mails) => {
    const newMails = mails.filter((mail) => mail.isRead)
    return Math.ceil((newMails.length / mails.length) * 100)
  })
}

function getInboxNum() {
  return storageService.query(MAIL_KEY).then((mails) => {
    const newMails = mails.filter((mail) => mail.status === 'inbox')
    return newMails.length
  })
}

function getDefaultFilter() {
  return { txt: '', isRead: null, status: 'all' }
}

function getEmptyMailtoSend() {
  return {
    subject: '',
    from: loggedinUser.fullname,
    fromEmail: loggedinUser.email,
    body: '',
    isRead: false,
    sentAt: Date.now(),
    to: '',
    status: 'draft',
    isStared: false,
  }
}

function getEmptyMailtoDraft() {
  return {
    subject: '',
    from: loggedinUser.fullname,
    fromEmail: loggedinUser.email,
    body: '',
    isRead: false,
    sentAt: Date.now(),
    to: '',
    status: 'draft',
    isStared: false,
  }
}

function _createMails() {
  let mails = storageService.loadFromStorage(MAIL_KEY)
  if (!mails || !mails.length) {
    mails = [
      {
        id: 'e101',
        subject: 'How you doin!',
        from: 'Joey',
        fromEmail: 'joeyt@appsus.com',
        body: 'Would like to catch up sometimes i missed man ',
        isRead: false,
        sentAt: 1672228849000,
        to: loggedinUser.email,
        status: 'inbox',
        isStared: true,
      },
      {
        id: 'e102',
        subject: 'Sent me the project',
        from: 'shimshon',
        fromEmail: 'shimshon23@gmail.com',
        body: 'Hi, can you send me the project',
        isRead: true,
        sentAt: 1672056049000,
        to: loggedinUser.email,
        status: 'inbox',
        isStared: false,
      },
      {
        id: 'e103',
        subject: 'Sony',
        from: 'Sony',
        fromEmail: 'PlaystationPR@sony.com',
        body: 'Enable notifications Download Sony on your phone and receive push notifications for Discord activities like messages, mentions, friend requests, and events.',
        isRead: false,
        sentAt: 1671883249000,
        to: loggedinUser.email,
        status: 'inbox',
        isStared: false,
      },
      {
        id: 'e104',
        subject: 'You recieved payment',
        from: 'Paypal',
        fromEmail: 'service@paypal.co.il',
        body: 'You have recieved 42.99$ back to your account',
        isRead: true,
        sentAt: 1671883239000,
        to: loggedinUser.email,
        status: 'inbox',
        isStared: true,
      },
      {
        id: 'e105',
        subject: 'everything is gonna be alright',
        from: loggedinUser.fullname,
        fromEmail: loggedinUser.email,
        body: 'Hey Roni we got this🦾',
        isRead: true,
        sentAt: 1671883149000,
        to: 'roniy@appsus.com',
        status: 'sent',
        isStared: true,
      },
      {
        id: 'e106',
        subject: 'Pukiii!!',
        from: loggedinUser.fullname,
        fromEmail: loggedinUser.email,
        body: 'I cant hear the name puki anymore🤬',
        isRead: true,
        sentAt: 1671883149000,
        to: 'puki@appsus.com',
        status: 'sent',
        isStared: true,
      },
      {
        id: 'e107',
        subject: 'Job offer',
        from: 'Google',
        fromEmail: 'google@gmail.com',
        body: 'come work at our firm, good money and good hours, you can start on Monday!',
        isRead: false,
        sentAt: 1671883149000,
        to: loggedinUser.email,
        status: 'inbox',
        isStared: false,
      },
      {
        id: 'e108',
        subject: 'LAST CALL!!!',
        from: 'School',
        fromEmail: 'school@appsus.com',
        body: 'you need to deliver your work untill 10pm or we will give you an F, your choise...',
        isRead: true,
        sentAt: 1671883149000,
        to: loggedinUser.email,
        status: 'inbox',
        isStared: false,
      },
      {
        id: 'e109',
        subject: 'there is a new show on netflix you need to see',
        from: 'Netflix',
        fromEmail: 'netflix@gmail.com',
        body: 'We just added a show and we tought you would like to come check it out',
        isRead: false,
        sentAt: 1671883149000,
        to: loggedinUser.email,
        status: 'inbox',
        isStared: true,
      },
      {
        id: 'e110',
        subject:
          'congratulations, you have won a trip on a cruise to the philippines!!! ',
        from: 'William Levy',
        fromEmail: 'tripbets@appsus.com',
        body: 'congratulations, you have won a trip on a cruise to the philippines!!! contact us for the tickets😍',
        isRead: true,
        sentAt: 1671883149000,
        to: loggedinUser.email,
        status: 'inbox',
        isStared: true,
      },
      {
        id: 'e111',
        subject: 'Thailand',
        from: 'ISTA',
        fromEmail: 'ista@appsus.com',
        body: 'come with us and have the best vecation of your life in the cheapest price possible',
        isRead: true,
        sentAt: 1671883149000,
        to: loggedinUser.email,
        status: 'inbox',
        isStared: true,
      },
      {
        id: 'e112',
        subject: 'hey shuki!',
        from: loggedinUser.fullname,
        fromEmail: loggedinUser.email,
        body: 'we need to talk, give me a call',
        isRead: true,
        sentAt: 1671883149000,
        to: 'shuki@appsus.com',
        status: 'sent',
        isStared: true,
      },
      {
        id: 'e113',
        subject: 'Job offer!',
        from: 'Zimbabua most of scamers',
        fromEmail: 'makemoney@gmail.com',
        body: 'if you want to make shit loads of money come to us and we will make you rich! we pay very good and you can have the best life possible!',
        isRead: true,
        sentAt: 1671883149000,
        to: loggedinUser.email,
        status: 'inbox',
        isStared: false,
      },
      {
        id: 'e114',
        subject: 'Hi yossi',
        from: 'loggedinUser.fullname',
        fromEmail: 'loggedinUser.email',
        body: 'Hey, where does i need to upload the files?',
        isRead: false,
        sentAt: 1671883149000,
        to: 'yossiDavid@appsus.com',
        status: 'sent',
        isStared: false,
      },
      {
        id: 'e115',
        subject: 'come and see a good show for free!!!',
        from: 'Sdarot tv',
        fromEmail: 'sdarotTV.appsus.com',
        body: 'we have missed you and just wanted to let you know that your favorite show just strated season 5, come check it out',
        isRead: true,
        sentAt: 1671883149000,
        to: 'loggedinUser.email',
        status: 'inbox',
        isStared: true,
      },
    ]
  }
  storageService.saveToStorage(MAIL_KEY, mails)
}
