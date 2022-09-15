﻿using Microsoft.AspNetCore.Mvc;
using SynelTest_13_09.Data;
using SynelTest_13_09.NewFolder;

namespace SynelTest_13_09.Controllers;

[ApiController]
[Route("[controller]")]
public class EmployeeController
{

    private readonly Context _context;


    public EmployeeController(Context context)
    {
        _context = context;
    }

    [HttpGet]
    public ActionResult<List<Employee>> GetAllEmployees()

    {
        
        return new ActionResult<List<Employee>>(_context.Employees.ToList());
    }
}