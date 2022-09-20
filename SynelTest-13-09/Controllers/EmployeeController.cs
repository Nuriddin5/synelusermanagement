using Microsoft.AspNetCore.Mvc;
using SynelTest_13_09.Data;
using SynelTest_13_09.Dtos;
using SynelTest_13_09.Model;
using SynelTest_13_09.Utils;

namespace SynelTest_13_09.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EmployeeController : ControllerBase
{
    private readonly Context _context;


    public EmployeeController(Context context)
    {
        _context = context;
    }


    [HttpPost]
    public ActionResult<List<Employee>> GetEmployees([FromBody] FileDto fileDto)
    {
        var path = "C:\\Users\\zuxra\\Desktop\\CourseFullstack\\projects\\SynelTest-13-09\\SynelTest-13-09\\Files";

        if (FromCsv.IsDirectoryEmpty(path))
        {
            return NotFound("File not uploaded");
        }

        if (!System.IO.File.Exists(path + "\\" + fileDto.Filename))
        {
            return NotFound("File not found");
        }

        var employeesFromCsv
            = FromCsv.GetValues(fileDto.Filename);

        foreach (var employee in employeesFromCsv)
        {
            _context.Add(employee);
        }

        _context.SaveChanges();

        return Ok();
    }
}