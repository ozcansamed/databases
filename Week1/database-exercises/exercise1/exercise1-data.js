const employees = [{
    emp_name: 'Linus Torvalds',
    salary: 5000,
    reports_to: null
  },
  {
    emp_name: 'Guido van Rossum',
    salary: 4000,
    reports_to: 1
  },
  {
    emp_name: 'Niklaus Wirth',
    salary: 3000,
    reports_to: 2
  },
  {
    emp_name: 'James Arthur Gosling',
    salary: 3000,
    reports_to: 2
  }, {
    emp_name: 'Donald Ervin Knuth',
    salary: 4000,
    reports_to: 1
  }, {
    emp_name: 'Kenneth Lane Thompson',
    salary: 3000,
    reports_to: 5
  }, {
    emp_name: 'Brian Wilson Kernighan',
    salary: 3000,
    reports_to: 5
  }, {
    emp_name: 'Bill Gates',
    salary: 4000,
    reports_to: 1
  }, {
    emp_name: 'Ada Lovelace',
    salary: 3000,
    reports_to: 8
  }, {
    emp_name: 'Tim Berners-Lee',
    salary: 3000,
    reports_to: 8
  }
];
const departments = [{
  dept_no: 111,
  dept_name: 'Callback Cats',
  manager: 'Christopher E. Willingham'
}, {
  dept_no: 112,
  dept_name: 'Data Pirates',
  manager: 'Peter Reeves'
}, {
  dept_no: 113,
  dept_name: 'Hypertext Assassins',
  manager: 'Nellie S. Dye'
}, {
  dept_no: 114,
  dept_name: 'Software Chasers',
  manager: 'Sharon B. Wakefield'
}, {
  dept_no: 115,
  dept_name: 'Query Language Spies',
  manager: 'Steven P. Lewis'
}, {
  dept_no: 116,
  dept_name: 'Binary Beasts',
  manager: 'Theodore C. Moore'
}, {
  dept_no: 117,
  dept_name: 'App Monsters',
  manager: 'Hazel D. Ellis'
}, {
  dept_no: 118,
  dept_name: 'Pseudo Program Nerds',
  manager: 'Eric J. Heller'
}, {
  dept_no: 119,
  dept_name: 'Algorithm Unlock',
  manager: 'Joyce J. Bills'
}, {
  dept_no: 120,
  dept_name: 'Kernel Ponies',
  manager: 'Donna M. Quirk'
}];

const projects = [{
    proj_no: 2101,
    proj_name: 'Food for thought',
    starting_date: '2011-11-11',
    ending_date: '2012-12-12'
  },
  {
    proj_no: 2102,
    proj_name: 'Nourishing the nurseries of the sea',
    starting_date: '2012-12-12',
    ending_date: '2013-03-13'
  }, {
    proj_no: 2103,
    proj_name: 'Emission-free learning',
    starting_date: '2013-03-13',
    ending_date: '2014-04-14'
  }, {
    proj_no: 2104,
    proj_name: 'Submit together',
    starting_date: '2014-04-14',
    ending_date: '2015-05-15'
  }, {
    proj_no: 2105,
    proj_name: 'Climate responsible government',
    starting_date: '2015-05-15',
    ending_date: '2016-06-16'
  }, {
    proj_no: 2106,
    proj_name: 'Sharing is caring',
    starting_date: '2016-06-16',
    ending_date: '2017-07-17'
  }, {
    proj_no: 2107,
    proj_name: 'Investing in change',
    starting_date: '2017-07-17',
    ending_date: '2018-08-18'
  }, {
    proj_no: 2108,
    proj_name: 'Growing with change',
    starting_date: '2018-08-18',
    ending_date: '2019-09-19'
  }, {
    proj_no: 2109,
    proj_name: 'Invest with impact',
    starting_date: '2019-09-19',
    ending_date: '2020-1O-20'
  }, {
    proj_no: 2110,
    proj_name: 'A blooming business',
    starting_date: '2010-1O-10',
    ending_date: '2021-10-10'
  }
];

module.exports = {
  employees,
  departments,
  projects
}