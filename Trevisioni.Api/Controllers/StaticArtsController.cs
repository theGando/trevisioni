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
    public class StaticArtsController : ControllerBase
    {
        private readonly TrevisioniContext _context;

        public StaticArtsController(TrevisioniContext context)
        {
            _context = context;
        }

        // GET: api/StaticArts
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StaticArt>>> GetStaticArts()
        {
            return await _context.StaticArts.ToListAsync();
        }

        // GET: api/StaticArts/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StaticArt>> GetStaticArt(string id)
        {
            var staticArt = await _context.StaticArts.FindAsync(id);

            if (staticArt == null)
            {
                return NotFound();
            }

            return staticArt;
        }

        // PUT: api/StaticArts/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStaticArt(string id, StaticArt staticArt)
        {
            if (id != staticArt.Id)
            {
                return BadRequest();
            }

            _context.Entry(staticArt).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StaticArtExists(id))
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

        // POST: api/StaticArts
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StaticArt>> PostStaticArt(StaticArt staticArt)
        {
            _context.StaticArts.Add(staticArt);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (StaticArtExists(staticArt.Id))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetStaticArt", new { id = staticArt.Id }, staticArt);
        }

        // DELETE: api/StaticArts/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStaticArt(string id)
        {
            var staticArt = await _context.StaticArts.FindAsync(id);
            if (staticArt == null)
            {
                return NotFound();
            }

            _context.StaticArts.Remove(staticArt);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StaticArtExists(string id)
        {
            return _context.StaticArts.Any(e => e.Id == id);
        }
    }
}
