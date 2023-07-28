// Write your code here
import Notification from '../Notification'

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning} from 'react-icons/md'
import {MdInfo} from 'react-icons/md'

import './index.css'

const AlertNotifications = () => {
  const renderSuccess = () => (
    <Notification>
      <AiFillCheckCircle />
      <div>
        <h1 className="success">Success</h1>
        <p>You can access all the files in the folder</p>
      </div>
    </Notification>
  )

  const renderError = () => (
    <Notification>
      <RiErrorWarningFill />
      <div>
        <h1>Error</h1>
        <p>Sorry, you are not authorized to have access to delete the file</p>
      </div>
    </Notification>
  )

  const renderWarning = () => (
    <Notification>
      <MdWarning />
      <div>
        <h1>Warning</h1>
        <p> Viewers of this file can see comments and suggestions</p>
      </div>
    </Notification>
  )

  const renderInfo = () => (
    <Notification>
      <MdInfo />
      <div>
        <h1>Info</h1>
        <p>Anyone on the internet can view these files</p>
      </div>
    </Notification>
  )

  return (
    <div className="bg-container">
      <h1 className="heading">Alert Notifications</h1>
      <div>
        {renderSuccess()}
        {renderError()}
        {renderWarning()}
        {renderInfo()}
      </div>
    </div>
  )
}
export default AlertNotifications
