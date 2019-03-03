export const JUDGE_STATUS = {
  '-2': {
    name: '컴파일 에러',
    short: 'CE',
    color: 'yellow',
    type: 'warning'
  },
  '-1': {
    name: '잘못된 풀이',
    short: 'WA',
    color: 'red',
    type: 'error'
  },
  '0': {
    name: '정확한풀이',
    short: 'AC',
    color: 'green',
    type: 'success'
  },
  '1': {
    name: '시간초과',
    short: 'TLE',
    color: 'red',
    type: 'error'
  },
  '2': {
    name: '시간초과',
    short: 'TLE',
    color: 'red',
    type: 'error'
  },
  '3': {
    name: '메모리초과',
    short: 'MLE',
    color: 'red',
    type: 'error'
  },
  '4': {
    name: '런타임 에러',
    short: 'RE',
    color: 'red',
    type: 'error'
  },
  '5': {
    name: '시스템 에러',
    short: 'SE',
    color: 'red',
    type: 'error'
  },
  '6': {
    name: '처리중',
    color: 'yellow',
    type: 'warning'
  },
  '7': {
    name: '채점중',
    color: 'blue',
    type: 'info'
  },
  '8': {
    name: '부분 정답',
    short: 'PAC',
    color: 'blue',
    type: 'info'
  },
  '9': {
    name: '제출중',
    color: 'yellow',
    type: 'warning'
  }
}

export const CONTEST_STATUS = {
  'NOT_START': '1',
  'UNDERWAY': '0',
  'ENDED': '-1'
}

export const CONTEST_STATUS_REVERSE = {
  '1': {
    name: '진행예정',
    color: 'yellow'
  },
  '0': {
    name: '진행중',
    color: 'green'
  },
  '-1': {
    name: '종료됨',
    color: 'red'
  }
}

export const RULE_TYPE = {
  ACM: 'ACM',
  OI: 'OI'
}

export const CONTEST_TYPE = {
  PUBLIC: '공개',
  PRIVATE: '패스워드'
}

export const USER_TYPE = {
  REGULAR_USER: 'Regular User',
  ADMIN: 'Admin',
  SUPER_ADMIN: 'Super Admin'
}

export const PROBLEM_PERMISSION = {
  NONE: 'None',
  OWN: 'Own',
  ALL: 'All'
}

export const STORAGE_KEY = {
  AUTHED: 'authed',
  PROBLEM_CODE: 'problemCode',
  languages: 'languages'
}

export function buildProblemCodeKey (problemID, contestID = null) {
  if (contestID) {
    return `${STORAGE_KEY.PROBLEM_CODE}_${contestID}_${problemID}`
  }
  return `${STORAGE_KEY.PROBLEM_CODE}_NaN_${problemID}`
}

export const GOOGLE_ANALYTICS_ID = 'UA-111499601-1'
