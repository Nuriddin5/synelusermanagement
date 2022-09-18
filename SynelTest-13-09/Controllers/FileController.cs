using Microsoft.AspNetCore.Mvc;
using SynelTest_13_09.Dtos;
using SynelTest_13_09.Model;
using SynelTest_13_09.Utils;


[ApiController]
public class FileController : ControllerBase
{
    [HttpPost]
    [Route("api/file")]
    public ActionResult Post([FromForm] FileModel file)
    {
        try
        {
            string path = Path.Combine(Directory.GetCurrentDirectory(), "Files", file.FileName);

            using (Stream stream = new FileStream(path, FileMode.Create))
            {
                file.FormFile.CopyTo(stream);
            }

            return StatusCode(StatusCodes.Status201Created);
        }
        catch (Exception)
        {
            return StatusCode(StatusCodes.Status500InternalServerError);
        }
    }

    [HttpGet]
    [Route("api/file")]
    public ActionResult<List<Values>> GetValues()
    {
        return new ActionResult<List<Values>>(FromCsv.GetValues("dataset.csv"));
    }
    
    
    [HttpPost]
    [Route(template: "api/get")]
    public ActionResult<List<Values>> GetEmployees([FromBody] FileDto fileDto)
    {
        var path = "C:\\Users\\zuxra\\Desktop\\CourseFullstack\\projects\\SynelTest-13-09\\SynelTest-13-09\\Files";

        if (FromCsv.IsDirectoryEmpty(path))
        {
            return NotFound("File not uploaded");
        }

        if (!System.IO.File.Exists(path + "\\" + fileDto.filename))
        {
            return NotFound("File not found");
        }

        return Ok(FromCsv.GetValues(fileDto.filename));
    }
}