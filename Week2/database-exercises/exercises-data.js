const employees = [{
    full_name: 'Linus Torvalds',
    salary: 6000,
    address: '2912  Davis Avenue, New York',
    manager: null,
    department_no: null,
  },
  {
    full_name: 'Guido van Rossum',
    salary: 5000,
    address: '1180  My Drive, Washington',
    manager: 1,
    department_no: null,
  },
  {
    full_name: 'Niklaus Wirth',
    salary: 4000,
    address: '1913  Union Street,  Michigan',
    manager: 2,
    department_no: null,
  },
  {
    full_name: 'James Arthur Gosling',
    salary: 3000,
    address: '4863  Oakridge Farm Lane, Wisconsin',
    manager: 3,
    department_no: 111,
  },
  {
    full_name: 'Donald Ervin Knuth',
    salary: 3000,
    address: '3426  Davis Court, Metropolis',
    manager: 3,
    department_no: 111,
  },
  {
    full_name: 'Kenneth Lane Thompson',
    salary: 3000,
    address: '3904  Parkway Drive, Arizona',
    manager: 3,
    department_no: 112,
  },
  {
    full_name: 'Brian Wilson Kernighan',
    salary: 3000,
    address: '4828  Hart Country Lane, Georgia',
    manager: 3,
    department_no: 112,
  },
  {
    full_name: 'Bill Gates',
    salary: 3000,
    address: '2963  Dovetail Drive, Illinois',
    manager: 3,
    department_no: 112,
  },
  {
    full_name: 'Ada Lovelace',
    salary: 4000,
    address: '2317  Collins Avenue, North Carolina',
    manager: 2,
    department_no: null,
  },
  {
    full_name: 'Tim Berners-Lee',
    salary: 3000,
    address: '2334  Shearwood Forest Drive, Iowa',
    manager: 9,
    department_no: 114,
  },
  {
    full_name: 'Christopher E. Willingham',
    salary: 3000,
    address: '3659  Argonne Street, Delaware',
    manager: 9,
    department_no: 114,
  },
  {
    full_name: 'Peter Reeves',
    salary: 3000,
    address: '616  Del Dew Drive, Maryland',
    manager: 9,
    department_no: 115,
  },
  {
    full_name: 'Nellie S. Dye',
    salary: 3000,
    address: '2445  Viking Drive, Texas',
    manager: 9,
    department_no: 115,
  },
  {
    full_name: 'Sharon B. Wakefield',
    salary: 3000,
    address: '945  Post Avenue, Ohio',
    manager: 9,
    department_no: 115,
  },
  {
    full_name: 'Steven P. Lewis',
    salary: 4000,
    address: '2046  Baker Avenue, Texas',
    manager: 2,
    department_no: null,
  },
  {
    full_name: 'Theodore C. Moore',
    salary: 3000,
    address: '2470  Sunrise Road, Nevada',
    manager: 15,
    department_no: 116,
  },
  {
    full_name: 'Hazel D. Ellis',
    salary: 3000,
    address: '2479  Stuart Street, Pennsylvania',
    manager: 15,
    department_no: 117,
  },
  {
    full_name: 'Eric J. Heller',
    salary: 3000,
    address: '3457  Layman Court, Alabama',
    manager: 15,
    department_no: 118,
  },
  {
    full_name: 'Joyce J. Bills',
    salary: 3000,
    address: '4569  Renwick Drive, Pennsylvania',
    manager: 15,
    department_no: 119,
  },
  {
    full_name: 'Donna M. Quirk',
    salary: 3000,
    address: '884  Fieldcrest Road, New York',
    manager: 15,
    department_no: 120,
  },
];

const departments = [{
    dept_no: 111,
    title: 'Callback Cats',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    address: '1175  Dale Avenue, New York',
  },
  {
    dept_no: 112,
    title: 'Data Pirates',
    description: 'sed do eiusmod tempor incididunt ut labore et dolore',
    address: '2847  James Martin Circle, New York',
  },
  {
    dept_no: 113,
    title: 'Hypertext Assassins',
    description: 'incididunt ut labore et dolore magna aliqua',
    address: '1421  Bagwell Avenue, New York',
  },
  {
    dept_no: 114,
    title: 'Software Chasers',
    description: 'Ut enim ad minim veniam',
    address: '3820  Goodwin Avenue, New York',
  },
  {
    dept_no: 115,
    title: 'Query Language Spies',
    description: 'quis nostrud exercitation ullamco',
    address: '3238  McVaney Road, New York',
  },
  {
    dept_no: 116,
    title: 'Binary Beasts',
    description: 'laboris nisi ut aliquip ex ea commodo consequat',
    address: '870  Carriage Court, Washington',
  },
  {
    dept_no: 117,
    title: 'App Monsters',
    description: 'Duis aute irure dolor in reprehenderit',
    address: '4334  Tyler Avenue, Washington',
  },
  {
    dept_no: 118,
    title: 'Pseudo Program Nerds',
    description: 'voluptate velit esse cillum dolore eu fugiat nulla pariatur',
    address: '362  Dennison Street, Washington',
  },
  {
    dept_no: 119,
    title: 'Algorithm Unlock',
    description: 'Excepteur sint occaecat cupidatat non proident',
    address: '1468  Virginia Street, Washington',
  },
  {
    dept_no: 120,
    title: 'Kernel Ponies',
    description: 'sunt in culpa qui officia deserunt mollit anim id est laborum',
    address: '1143  Peck Street, Washington',
  },
];

module.exports = {
  employees,
  departments
};