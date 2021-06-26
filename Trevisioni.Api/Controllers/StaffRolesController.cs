using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Trevisioni.Model;

namespace Trevisioni.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StaffRolesController : ControllerBase
    {
        private readonly TrevisioniContext _context;

        public StaffRolesController(TrevisioniContext context)
        {
            _context = context;
        }

        // GET: api/StaffRoles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StaffRole>>> GetStaffRoles()
        {
            return await _context.StaffRoles.ToListAsync();
        }

        // GET: api/StaffRoles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StaffRole>> GetStaffRole(string id)
        {
            var staffRole = await _context.StaffRoles.FindAsync(id);

            if (staffRole == null)
            {
                return NotFound();
            }

            return staffRole;
        }

        // PUT: api/StaffRoles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStaffRole(string id, StaffRole staffRole)
        {
            if (id != staffRole.Id)
            {
                return BadRequest();
            }

            _context.Entry(staffRole).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StaffRoleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/StaffRoles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StaffRole>> PostStaffRole(StaffRole staffRole)
        {
            _context.StaffRoles.Add(staffRole);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (StaffRoleExists(staffRole.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetStaffRole", new { id = staffRole.Id }, staffRole);
        }

        // DELETE: api/StaffRoles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStaffRole(string id)
        {
            var staffRole = await _context.StaffRoles.FindAsync(id);
            if (staffRole == null)
            {
                return NotFound();
            }

            _context.StaffRoles.Remove(staffRole);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StaffRoleExists(string id)
        {
            return _context.StaffRoles.Any(e => e.Id == id);
        }
    }
}
