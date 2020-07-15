export default function createMessageTimeout(messageCSS, mFi, mEn) {
    setNotification(lang === 'fi' ? mFi : mEn )
    setNotificationStyle(messageCSS)
    setTimeout(() => {
      setNotification('')
      setNotificationStyle({})
    }, 5000)
}