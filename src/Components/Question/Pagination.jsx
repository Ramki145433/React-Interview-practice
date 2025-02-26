export default function Pagination ({total, page, setPage}) {
    const handlepagination = (num) => {
        if (num >= 1 && num <= (parseInt((total/10).toFixed(0))) + 1) {
            console.log(num)
            setPage(num)
        }
    }
return <>
<div className="pagination">
    <span onClick={() => handlepagination(page - 1)} style={{background : (page <= 1) ? "red" : null}}>⬅️</span>
    {
        [...Array(parseInt((total/10).toFixed(0)))].map((_,index) => (
            <span onClick={() => handlepagination(index + 1)} style={{background : page === index + 1 ? "gray" : null}}>{index + 1}</span>
        ))
    }
    <span onClick={() => handlepagination((page + 1))} style={{background : (page >= ((parseInt((total/10).toFixed(0))) + 1)) ? "red" : null}}>➡️</span>
</div>
</>
}