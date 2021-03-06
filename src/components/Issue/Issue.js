import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Paper from 'material-ui/Paper'
import { Card, CardHeader, CardText } from 'material-ui/Card'
import ReactMarkdown from 'react-markdown'

import getFullDate from '../../utils/getFullDate'

const Issue = ({ issue }) => {
	const issueStatus = issue.state
	const user = issue.user || {}
	const userLogin = user.login
	const userAvatar = user.avatar_url
	const subTitleIssue = `${userLogin} opened ${getFullDate(issue.created_at)} status: ${issueStatus}`

	return (
		<div className='issue-page'>
			<div className='wrapper'>
				<MuiThemeProvider>
					<Paper>
						<Card>
							<CardHeader
								title={ `${issue.title} #${issue.number}` }
								subtitle={ subTitleIssue }
								avatar={ userAvatar }
							/>
							<CardText>
								<ReactMarkdown
									source={ issue.body }
									className='markdown'
								/>
								{/* { issue.body } */}
							</CardText>
						</Card>
					</Paper>
				</MuiThemeProvider>
			</div>
		</div>
	)
}

export default Issue
