using Microsoft.AspNetCore.Mvc;
using SynelTest_13_09.Data;
using SynelTest_13_09.Dtos;
using SynelTest_13_09.Model;
using SynelTest_13_09.Utils;

namespace SynelTest_13_09.Controllers;

[ApiController]
public class FileController : ControllerBase
{
    private readonly Context _context;


    public FileController(Context context)
    {
        _context = context;
    }

    [HttpPost]
    [Route("api/import")]
    public ActionResult<int> GetEmployees([FromBody] FileDto fileDto)
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

        return Ok(employeesFromCsv.Count);
    }

    [HttpPost]
    [Route("api/file")]
    public ActionResult Post([FromForm] FileModel file)
    {
        try
        {
            if (file.FileName != null)
            {
                string path = Path.Combine(Directory.GetCurrentDirectory(), "Files", file.FileName);

                using (Stream stream = new FileStream(path, FileMode.Create))
                {
                    file.FormFile?.CopyTo(stream);
                }
            }

            return StatusCode(StatusCodes.Status201Created);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }
}