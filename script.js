const thead = document.getElementById('thead');
const tbody = document.getElementById('tbody');

const data = [
  {
    volcano: 'Ilopango',
    date: '429-433 CE',
    volume_dre: {
      value: '37 - 82 km³',
      src: 'https://doi.org/10.1073/pnas.2003008117',
    },
    volume_bulk: {
      value: '85 - 188 km³',
      src: 'https://doi.org/10.1073/pnas.2003008117',
    },
    magnitude: {
      value: '6.9 - 7.3',
      src: 'https://doi.org/10.1073/pnas.2003008117',
    },
  },
  {
    volcano: 'Changbai/Tianchi/Paektu',
    date: '946-947 CE',
    volume_dre: '',
    volume_bulk: {
      value: '40 - 98 km³',
      src: 'https://doi.org/10.1007/s00445-021-01487-8',
    },
    magnitude: {
      value: '6.4 - 7.2',
      src: 'https://doi.org/10.1007/s00445-021-01487-8',
    },
  },
  {
    volcano: 'Samalas',
    date: '1257 CE',
    volume_dre: {
      value: '33 - 40 km³',
      src: 'https://doi.org/10.1007/s00445-015-0960-9',
    },
    volume_bulk: '',
    magnitude: {
      value: '7.0',
      src: 'https://doi.org/10.1007/s00445-015-0960-9',
    },
  },
  {
    volcano: 'Tambora',
    date: '1815 CE',
    volume_dre: {
      value: '37 - 45 km³',
      src: 'https://doi.org/10.1016/j.jvolgeores.2014.08.020',
    },
    volume_bulk: '',
    magnitude: '',
  },
];

const make_cell = cell => {
  if (typeof cell === 'string') {
    return cell;
  } else {
    return `${cell.value} <a href="${cell.src}" target="_blank">ref</a>`;
  }
};

const main = () => {
  for (const eruption of data) {
    const row = [
      make_cell(eruption.volcano),
      make_cell(eruption.date),
      make_cell(eruption.volume_dre),
      make_cell(eruption.volume_bulk),
      make_cell(eruption.magnitude),
    ];
    const tr = document.createElement('tr');
    for (const text of row) {
      const td = document.createElement('td');
      td.innerHTML = text;
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
};

main();