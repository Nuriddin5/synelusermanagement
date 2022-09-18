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