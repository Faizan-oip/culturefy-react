Group should have grpImage prop for Group Image
Group should have groupName prop for Group Name
Group can have groupMembers prop for Group Members Count
Group can have fontVariant prop for Group Font Variations

Group can have redDot prop for showing red dot
Group can have groupButtons prop for Group Buttons

Group can have border prop for borders on group
Group can have time prop for time on group
Group can have followButton prop for followButton on group
Group can have followBackButton prop for followBackButton on group

Props {
grpImage: any(Image)?,
groupName: string?,
groupMembers: string?,
fontVariant: string, 'small' | 'large' ,
redDot: boolean, true | false,
groupButtons: boolean, true | false,
border: string, 'borderBottom' | 'borderTop'
time: 'string
followButton: boolean, true | false,
followBackButton: boolean, true | false,
}
