'use client'
import { useRef } from "react"
import ReactToPrint from "react-to-print"

export default function Home() {
  const printRef = useRef()
	return (

		<main className='min-h-screen'>
      <ReactToPrint
        trigger={() => {return <button className="p-2">Print the text</button>}}
        content={() => printRef.current}
        pageStyle={'print'}
        documentTitle="Some Random BS"
      />
			<p ref={printRef}>
				Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit,
				tempora quas? Molestias obcaecati recusandae omnis doloremque
				consequatur iure distinctio praesentium sint suscipit
				accusantium hic cupiditate possimus repellat ea impedit
				expedita, aut incidunt? Sit commodi, harum, quia laudantium vel
				enim doloribus velit facere similique ut beatae sed? Rem
				reprehenderit voluptatum labore, deleniti nisi sunt non
				voluptatibus autem exercitationem atque laudantium eligendi
				placeat magnam quia laboriosam soluta repudiandae praesentium ut
				error quas, nesciunt harum vel incidunt! Ab nihil ut, esse minus
				et sit. Nihil voluptates dicta minus, excepturi odio recusandae
				laboriosam non odit, eos et fugiat dolorem doloribus ea,
				repudiandae quis! Cumque, iure? Eligendi tempore eaque illum quo
				ab, aliquam ratione, debitis eum reprehenderit assumenda
				voluptatem vel dolorem! Dolorem cum aliquid magnam perspiciatis
				numquam officia doloremque ipsa. Nemo, dolorum saepe. Sunt
				pariatur nemo, iure ipsa quaerat corrupti unde maiores
				necessitatibus nam tenetur dolorem vitae, qui officia optio.
				Quia perspiciatis unde eius consectetur praesentium soluta nisi
				tenetur laudantium fugiat veritatis reiciendis ipsum eligendi
				corrupti perferendis, eum cum, minima quos ullam voluptatem
				expedita in ex, sunt recusandae! At quisquam, quibusdam modi hic
				perspiciatis libero commodi quidem est et animi quia fuga,
				provident debitis deleniti sed adipisci blanditiis laudantium
				qui. Error iure nulla ad illum.
			</p>
		</main>
	)
}
