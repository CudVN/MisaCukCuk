$(document).ready(function () {
	loadData();
});
function loadData() {
	$.each(data, function (index, item) {
		var trHTML = $(`<tr>
                <td>`+item.EmployeeCode+`</td>
                <td>`+ item.EmployeeName +`</td>
                <td>`+ item.Email +`</td>
                <td>`+ item.Mobile +`</td>
                <td>`+ item.Adress +`</td>
             </tr>`)
		$('.grid tbody').append(trHTML);
	});	
}
var data = [
	{
		EmployeeCode: "NV00001",
		EmployeeName: "Nguyễn Hữu Đức",
		Email: "huuduc0804@gmail.com",
		Mobile: "0979224123",
		Adress: "Cẩm Xuyên, Hà Tĩnh"
	},
	{
		EmployeeCode: "NV00002",
		EmployeeName: "Nguyễn Thị Liên",
		Email: "huuduc0804@gmail.com",
		Mobile: "0979224123",
		Adress: "Cẩm Xuyên, Hà Tĩnh"
	},
	{
		EmployeeCode: "NV00003",
		EmployeeName: "Nguyễn Khánh Vy",
		Email: "huuduc0804@gmail.com",
		Mobile: "0979224123",
		Adress: "Cẩm Xuyên, Hà Tĩnh"
	},
	{
		EmployeeCode: "NV00004",
		EmployeeName: "Nguyễn Hữu Đức",
		Email: "huuduc0804@gmail.com",
		Mobile: "0979224123",
		Adress: "Cẩm Xuyên, Hà Tĩnh"
	},
	{
		EmployeeCode: "NV00005",
		EmployeeName: "Nguyễn Hữu Đức",
		Email: "huuduc0804@gmail.com",
		Mobile: "0979224123",
		Adress: "Cẩm Xuyên, Hà Tĩnh"
	}
];