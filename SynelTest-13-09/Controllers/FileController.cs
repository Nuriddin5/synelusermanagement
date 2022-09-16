using Microsoft.AspNetCore.Mvc;
using SynelTest_13_09.Model;
using SynelTest_13_09.Utils;

[Route("api/file")]
[ApiController]
public class FileController : ControllerBase
{
    [HttpPost]
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
    public ActionResult<List<Values>> GetValues()
    {
        return new ActionResult<List<Values>>(FromCsv.GetValues());
    }
}